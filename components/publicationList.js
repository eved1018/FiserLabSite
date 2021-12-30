const publicationList = [
    {
        year: '2021',
        title: " INTERCAAT: identifying interface residues between macromolecules",
        authors:"Steven Grudman, J Eduardo Fajardo, Andras Fiser",
        abstarct:" Summary: The Interface Contact definition with Adaptable Atom Types (INTERCAAT) was developed to determine the atomic interactions between molecules that form a known three dimensional structure. First, INTERCAAT creates a Voronoi tessellation where each atom acts as a seed. Interactions are defined by atoms that share a hyperplane and whose distance is less than the sum of each atoms' Van der Waals radii plus the diameter of a solvent molecule. Interacting atoms are then classified and interactions are filtered based on compatibility. INTERCAAT implements an adaptive atom classification method; therefore, it can explore interfaces between a variety macromolecules.",
        link: "https://pubmed.ncbi.nlm.nih.gov/34499117/",
    },
    {
        year: '2021',
        title: "Estimating the accuracy of pharmacophore-based detection of cognate receptor-ligand pairs in the immunoglobulin superfamily",
        authors:"Nelson Gil, Rojan Shrestha, Andras Fiser",
        abstarct:"Secreted and membrane-bound members of the immunoglobulin superfamily (IgSF) encompass a large, diverse array of proteins that play central roles in immune response and neural development, and are implicated in diseases ranging from cancer to rheumatoid arthritis. Despite the potential biomedical benefits of understanding IgSF:IgSF cognate receptor-ligand interactions, relatively little about them is known at a molecular level, and experimentally probing all possible receptor-ligand pairs is prohibitively costly. The Protein Ligand Interface Design (ProtLID) algorithm is a computational pharmacophore-based approach to identify cognate receptor-ligand pairs that was recently validated in a pilot study on a small set of IgSF complexes. Although ProtLID has shown a success rate of 61% at identifying at least one cognate ligand for a given receptor, it currently lacks any form of confidence measure that can prioritize individual receptor-ligand predictions to pursue experimentally. In this study, we expanded the application of ProtLID to cover all IgSF complexes with available structural data. In addition, we introduced an approach to estimate the confidence of predictions made by ProtLID based on a statistical analysis of how the ProtLID-constructed pharmacophore matches the structures of candidate ligands. The confidence score combines the physicochemical compatibility, spatial consistency, and mathematical skewness of the distribution of matches throughout a set of candidate ligands. Our results suggest that a subset of cases meeting stringent confidence criteria will always have at least one successful receptor-ligand prediction. ",
        link: "https://pubmed.ncbi.nlm.nih.gov/33483991/",
        thumbnail:"",
    },
    {
        year: '2021',
        title: "Residue-based pharmacophore approaches to study protein-protein interactions",
        authors:"Shrestha R, Fajardo JE, Fiser A",
        abstarct:"This review focuses on pharmacophore approaches in researching protein interfaces that bind protein ligands. Pharmacophore descriptions of binding interfaces that employ molecular dynamics simulation can account for effects of solvation and conformational flexibility. In addition, these calculations provide an approximation to entropic considerations and as such, a better approximation of the free energy of binding. Residue-based pharmacophore approaches can facilitate a variety of drug discovery tasks such as the identification of receptor-ligand partners, identifying their binding poses, designing protein interfaces for selectivity, or defining a reduced mutational combinatorial exploration for subsequent experimental engineering techniques by orders of magnitudes.",
        link: "https://pubmed.ncbi.nlm.nih.gov/33486430/",
        thumbnail:"",
    },
      {
        year: '2021',
        title: "miRNA-mediated loss of m6A increases nascent translation in glioblastoma",
        authors:"Zepecki JP, Karambizi D, Fajardo JE, Snyder KM, Guetta-Terrier C, Tang OY, Chen JS, Sarkar A, Fiser A, Toms SA, Tapinos N",
        abstarct:"Within the glioblastoma cellular niche, glioma stem cells (GSCs) can give rise to differentiated glioma cells (DGCs) and, when necessary, DGCs can reciprocally give rise to GSCs to maintain the cellular equilibrium necessary for optimal tumor growth. Here, using ribosome profiling, transcriptome and m6A RNA sequencing, we show that GSCs from patients with different subtypes of glioblastoma share a set of transcripts, which exhibit a pattern of m6A loss and increased protein translation during differentiation. The target sequences of a group of miRNAs overlap the canonical RRACH m6A motifs of these transcripts, many of which confer a survival advantage in glioblastoma. Ectopic expression of the RRACH-binding miR-145 induces loss of m6A, formation of FTO/AGO1/ILF3/miR-145 complexes on a clinically relevant tumor suppressor gene (CLIP3) and significant increase in its nascent translation. Inhibition of miR-145 maintains RRACH m6A levels of CLIP3 and inhibits its nascent translation. This study highlights a critical role of miRNAs in assembling complexes for m6A demethylation and induction of protein translation during GSC state transition.",
        link: "https://pubmed.ncbi.nlm.nih.gov/33684100/",
        thumbnail:"",
    },

    
]
export default publicationList

