var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = LineageCollapse","category":"page"},{"location":"#LineageCollapse","page":"Home","title":"LineageCollapse","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for LineageCollapse.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [LineageCollapse]","category":"page"},{"location":"#LineageCollapse.hamming-Tuple{BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}, BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}}","page":"Home","title":"LineageCollapse.hamming","text":"hamming(x::LongDNA{4}, y::LongDNA{4})::Float64\n\nCalculate the Hamming distance between two LongDNA{4} sequences.\n\nReturns\n\nFloat64: Hamming distance.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.load_data-Tuple{String}","page":"Home","title":"LineageCollapse.load_data","text":"load_data(filepath::String; delimiter::Char='\t', required_columns=[:sequence, :v_sequence_end, :j_sequence_start, :cdr3, :v_call, :j_call, :stop_codon])::DataFrame\n\nLoad data from a file and return a DataFrame.\n\nArguments\n\nfilepath::String: Path to the data file.\ndelimiter::Char='\t': Delimiter used in the data file (default: tab).\nrequired_columns::Vector{Symbol}=[:sequence, :v_sequence_end, :j_sequence_start, :cdr3, :v_call, :j_call, :stop_codon]: Required columns in the data file.\n\nReturns\n\nDataFrame: DataFrame containing the loaded data.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.pairwise_hamming-Tuple{Vector{BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}}}","page":"Home","title":"LineageCollapse.pairwise_hamming","text":"pairwise_hamming(sequences::Vector{LongDNA{4}})::Array{Float64, 2}\n\nCompute the pairwise Hamming distance matrix for a vector of LongDNA{4} sequences.\n\nReturns\n\nArray{Float64, 2}: Symmetric distance matrix.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.preprocess_data-Tuple{DataFrames.DataFrame}","page":"Home","title":"LineageCollapse.preprocess_data","text":"preprocess_data(df::DataFrame; min_d_region_length::Int=9)::DataFrame\n\nPreprocess the input DataFrame by performing data cleaning and transformation.\n\nArguments\n\ndf::DataFrame: Input DataFrame.\nmin_d_region_length::Int=9: Minimum length of the D sequence to keep.\n\nReturns\n\nDataFrame: Preprocessed DataFrame.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.process_lineages-Tuple{DataFrames.DataFrame}","page":"Home","title":"LineageCollapse.process_lineages","text":"process_lineages(df::DataFrame; \n                 cutoff_ratio::Float64=0.1, \n                 allele_ratio::Float64=0.5)::DataFrame\n\nProcess lineages in the input DataFrame.\n\nArguments\n\ndf::DataFrame: Input DataFrame.\ncutoff_ratio::Float64=0.1: Ratio to determine the cutoff height for hierarchical clustering.\nallele_ratio::Float64=0.5: Minimum ratio of CDR3 frequency to consider.\n\nReturns\n\nDataFrame: Processed DataFrame with lineage information.\n\n\n\n\n\n","category":"method"}]
}
