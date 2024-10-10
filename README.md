# LineageCollapse.jl
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://mashu.github.io/LinageCollapse.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://mashu.github.io/LinageCollapse.jl/dev/)
[![Build Status](https://github.com/mashu/LinageCollapse.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/mashu/LinageCollapse.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/mashu/LinageCollapse.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/mashu/LinageCollapse.jl)

LineageCollapse.jl is a high-performance Julia package for performing standardized soft lineage collapsing on immune repertoire sequencing data. This package provides a robust and efficient implementation of lineage collapsing, a common task in many types of immunological analyses, including antibody repertoire analysis, T cell receptor studies, and immune repertoire diversity assessment.

## Features

- Fast and memory-efficient processing of large-scale immune repertoire data
- Implements a standardized soft lineage collapsing algorithm
- Supports AIRR-compliant input data formats
- Flexible parameter configuration for customized analysis
- Built-in visualization tools for diagnostic plots
- Multithreaded processing for improved performance on multi-core systems

## Installation

You can install LineageCollapse.jl using Julia's package manager. From the Julia REPL, type `]` to enter the Pkg REPL mode and run:

```
pkg> add LineageCollapse
```

## Quick Start

```julia
using LineageCollapse

# Load and preprocess data
df = load_data("path/to/your/airr_data.tsv.gz")
preprocessed_df = preprocess_data(df)

# Perform lineage collapsing
collapsed_df = process_lineages(preprocessed_df)

# Generate diagnostic plots
plot_diagnostics(collapsed_df)
```

## Input Requirements

LineageCollapse.jl requires input data to be in AIRR-C (Adaptive Immune Receptor Repertoire - Community) format, typically obtained from tools like IgBLAST. The following columns are required:

- sequence
- v_sequence_end
- j_sequence_start
- cdr3
- v_call
- j_call
- stop_codon

## Algorithm Overview

1. **Grouping**: Sequences are grouped by `v_call`, `j_call`, and `cdr3_length`.
2. **Distance Calculation**: Pairwise Hamming distances are computed between CDR3 sequences within each group.
3. **Clustering**: Average linkage hierarchical clustering is performed on the distance matrix.
4. **Cluster Formation**: The hierarchical tree is cut at 10% of its height from the tip to form clusters.
5. **Allelic Ratio Filtering**: To preserve consistent variations in the D-region (between the end of V and start of J), an allelic ratio filter (default 50%) is applied to discard outliers.

## Customization

LineageCollapse.jl offers various parameters for customizing the analysis:

```julia
collapsed_df = process_lineages(preprocessed_df,
                                cutoff_ratio=0.1,  # Tree cutting height ratio
                                allele_ratio=0.5)  # Minimum allelic ratio
```

## Visualization

The `plot_diagnostics` function generates a set of diagnostic plots to help assess the results of lineage collapsing:

- Cluster size distribution
- CDR3 length vs. cluster size
- CDR3 frequency distribution
- Top 10 V genes by count

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This package was inspired by the need for standardized lineage collapsing in immune repertoire analysis.
- We thank the AIRR Community for their efforts in standardizing immune repertoire data formats and analysis methods.
