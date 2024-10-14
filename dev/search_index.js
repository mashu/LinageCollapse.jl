var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = LineageCollapse","category":"page"},{"location":"#LineageCollapse","page":"Home","title":"LineageCollapse","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for LineageCollapse, a Julia package for collapsing lineages in AIRR data.","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LineageCollapse provides tools for processing and analyzing adaptive immune receptor repertoire (AIRR) data. It offers functions for data loading, preprocessing, lineage collapsing, and visualization.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install LineageCollapse using Julia's package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"LineageCollapse\")","category":"page"},{"location":"#Basic-Usage","page":"Home","title":"Basic Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Here's a quick example of how to use LineageCollapse:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using LineageCollapse\n\n# Load data\ndf = load_data(\"path/to/your/airr_data.tsv.gz\")\n\n# Preprocess data\npreprocessed_df = preprocess_data(df, min_d_region_length=3)\n\n# Perform lineage collapsing using default Hamming distance and Hierarchical clustering\ncollapsed_df = process_lineages(preprocessed_df)\n\n# Use Levenshtein distance with Hierarchical clustering\ncollapsed_df_lev = process_lineages(preprocessed_df, \n                                    distance_metric=LevenshteinDistance(), \n                                    clustering_method=HierarchicalClustering(0.1))\n\n# Adjust allele ratio and collapse results\ncollapsed_df_custom = process_lineages(preprocessed_df, \n                                       distance_metric=HammingDistance(),\n                                       clustering_method=HierarchicalClustering(0.1),\n                                       allele_ratio=0.3,\n                                       collapse=true)\n\n# Generate diagnostic plots (requires CairoMakie)\n# using CairoMakie\n# plot_diagnostics(collapsed_df)","category":"page"},{"location":"","page":"Home","title":"Home","text":"For more detailed information on each function and its options, please refer to the API documentation below.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [LineageCollapse]","category":"page"},{"location":"#LineageCollapse.compute_distance-Tuple{HammingDistance, BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}, BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}}","page":"Home","title":"LineageCollapse.compute_distance","text":"compute_distance(metric::DistanceMetric, x::LongDNA{4}, y::LongDNA{4})::Float64\n\nCompute the distance between two LongDNA{4} sequences using the specified distance metric.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.compute_distance-Tuple{LevenshteinDistance, BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}, BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}}","page":"Home","title":"LineageCollapse.compute_distance","text":"compute_distance(metric::DistanceMetric, x::LongDNA{4}, y::LongDNA{4})::Float64\n\nCompute the distance between two LongDNA{4} sequences using the specified distance metric.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.compute_pairwise_distance-Tuple{DistanceMetric, Vector{BioSequences.LongSequence{BioSequences.DNAAlphabet{4}}}}","page":"Home","title":"LineageCollapse.compute_pairwise_distance","text":"compute_pairwise_distance(metric::DistanceMetric, sequences::Vector{LongDNA{4}})::Matrix{Float64}\n\nCompute pairwise distances between sequences using the specified distance metric.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.load_data-Tuple{String}","page":"Home","title":"LineageCollapse.load_data","text":"load_data(filepath::String; \n          delimiter::Char='\t', \n          required_columns=[:sequence_id, :sequence, :v_sequence_end, :j_sequence_start, :cdr3, :v_call, :j_call, :stop_codon])::DataFrame\n\nLoad data from a file (compressed or uncompressed) and return a DataFrame.\n\nArguments\n\nfilepath::String: Path to the data file.\ndelimiter::Char='\t': Delimiter used in the data file (default: tab).\nrequired_columns::Vector{Symbol}: Required columns to select from the data file.\n\nReturns\n\nDataFrame: DataFrame containing the loaded data.\n\nThrows\n\nArgumentError: If any of the required columns are missing in the data file.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.perform_clustering-Tuple{HierarchicalClustering, Matrix{Float64}}","page":"Home","title":"LineageCollapse.perform_clustering","text":"perform_clustering(method::HierarchicalClustering, dist_matrix::Matrix{Float64})::Vector{Int}\n\nPerform hierarchical clustering on the input distance matrix using the specified method.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.preprocess_data-Tuple{DataFrames.DataFrame}","page":"Home","title":"LineageCollapse.preprocess_data","text":"preprocess_data(df::DataFrame; min_d_region_length::Int=0)::DataFrame\n\nPreprocess the input DataFrame by performing data cleaning and transformation.\n\nArguments\n\ndf::DataFrame: Input DataFrame.\nmin_d_region_length::Int=0: Minimum length of the D region to keep.\n\nReturns\n\nDataFrame: Preprocessed DataFrame.\n\n\n\n\n\n","category":"method"},{"location":"#LineageCollapse.process_lineages-Tuple{DataFrames.DataFrame}","page":"Home","title":"LineageCollapse.process_lineages","text":"process_lineages(df::DataFrame; \n                 distance_metric::DistanceMetric = HammingDistance(),\n                 clustering_method::ClusteringMethod = HierarchicalClustering(0.1),\n                 allele_ratio::Float64 = 0.5)::DataFrame\n\nProcess lineages in the input DataFrame using specified distance metric and clustering method.\n\nArguments\n\ndf::DataFrame: Input DataFrame.\ndistance_metric::DistanceMetric: Distance metric to use for sequence comparison.\nclustering_method::ClusteringMethod: Clustering method to use.\nallele_ratio::Float64: Minimum ratio of CDR3 frequency to consider.\n\nReturns\n\nDataFrame: Processed DataFrame with lineage information.\n\n\n\n\n\n","category":"method"}]
}
