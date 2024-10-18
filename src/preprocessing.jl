"""
    deduplicate_data(df::DataFrame, use_barcode::Bool=false)::DataFrame

Deduplicate the input DataFrame based on sequence or sequence+barcode.

# Arguments
- `df::DataFrame`: Input DataFrame.
- `use_barcode::Bool=false`: Whether to use barcode for deduplication.

# Returns
- `DataFrame`: Deduplicated DataFrame.
"""
function deduplicate_data(df::DataFrame, use_barcode::Bool=false)::DataFrame
    if use_barcode && :barcode in propertynames(df)
        df = unique(df, [:sequence, :barcode])
        @info "Deduplicated using sequence and barcode: $(nrow(df))"
    else
        df = unique(df, :sequence)
        @info "Deduplicated using sequence only: $(nrow(df))"
    end
    return df
end

"""
    preprocess_data(df::DataFrame; min_d_region_length::Union{Int,Nothing}=nothing, deduplicate::Bool=false, use_barcode::Bool=false)::DataFrame

Preprocess the input DataFrame by performing data cleaning and transformation.

# Arguments
- `df::DataFrame`: Input DataFrame.
- `min_d_region_length::Union{Int,Nothing}=nothing`: Minimum length of the D region to keep. If nothing, no filtering is applied.
- `deduplicate::Bool=false`: Whether to deduplicate the DataFrame.
- `use_barcode::Bool=false`: Whether to use barcode for deduplication (only applicable if deduplicate is true).

# Returns
- `DataFrame`: Preprocessed DataFrame.
"""
function preprocess_data(df::DataFrame;
    min_d_region_length::Union{Int,Nothing}=nothing,
    deduplicate::Bool=false,
    use_barcode::Bool=false)::DataFrame
    @info "Processing $(nrow(df)) rows"
    
    # Remove rows with missing CDR3
    df = dropmissing(df, :cdr3)
    @info "Dropped missing CDR3 rows: $(nrow(df))"
    
    # Remove rows with stop codons
    df = filter(row -> row.stop_codon == false, df)
    @info "Dropped stop codons: $(nrow(df))"
    
    # Calculate D region
    transform!(df,
        [:sequence, :v_sequence_end, :j_sequence_start] =>
        ByRow((seq, v_end, j_start) -> seq[v_end+1:j_start]) => :d_region
    )

    # Filter based on D region length if specified
    if !isnothing(min_d_region_length)
        df = filter(row -> length(row.d_region) > min_d_region_length, df)
        @info "Dropped short (≤$min_d_region_length) D region sequences: $(nrow(df))"
    end
    
    # Extract first allele from v_call and j_call
    transform!(df, :v_call => ByRow(x -> first(split(x, ","))) => :v_call_first)
    transform!(df, :j_call => ByRow(x -> first(split(x, ","))) => :j_call_first)
    
    # Calculate CDR3 length
    transform!(df, :cdr3 => ByRow(length) => :cdr3_length)

    # Deduplicate if requested
    if deduplicate
        df = deduplicate_data(df, use_barcode)
    end

    return df
end
