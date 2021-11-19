const publicationList = [
    {
        year: '2021',
        title: " INTERCAAT: identifying interface residues between macromolecules",
        authors:"Steven Grudman, J Eduardo Fajardo, Andras Fiser",
        abstarct:" Summary: The Interface Contact definition with Adaptable Atom Types (INTERCAAT) was developed to determine the atomic interactions between molecules that form a known three dimensional structure. First, INTERCAAT creates a Voronoi tessellation where each atom acts as a seed. Interactions are defined by atoms that share a hyperplane and whose distance is less than the sum of each atoms' Van der Waals radii plus the diameter of a solvent molecule. Interacting atoms are then classified and interactions are filtered based on compatibility. INTERCAAT implements an adaptive atom classification method; therefore, it can explore interfaces between a variety macromolecules.",
        link: "https://pubmed.ncbi.nlm.nih.gov/34499117/",
        thumbnail:"https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/bioinformatics/PAP/10.1093_bioinformatics_btab596/2/m_btab596f1.jpeg?Expires=1638445955&Signature=IvVpnKCut9m5I-B0ysJfhAVnuwgIB9p0sr2x80nzyKpC43Agdlh8~HwIq9B2ZYp7ApjOBFEcthLwIHCdGhLG6wMp8DgagyYioDFTz1l2iE5LdeKdaZj0Aheb23SMjc1WLpF-vXIY~7WCzxgt57owdjnQMztwahIqvQnXFEwffVqR848gAZYuz3dILbTQexeqYjUE~AJvdnU7jFPO~Z8YAcw9TxS-D-pfKQepX-ZVe2Mnfu8bw3yIJbIp66yMNQybdj5IHEUewDzEo4M2C7cko0crj58pZhho7BVmtO1OduvaI-NHn3CD39ujUct-cXBagyoy0Kp6PMPvm9tR6xpGGg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
    },
    {
        year: '2021',
        title: " Estimating the accuracy of pharmacophore-based detection of cognate receptor-ligand pairs in the immunoglobulin superfamily ",
        authors:"Nelson Gil, Rojan Shrestha, Andras Fiser",
        abstarct:"Secreted and membrane-bound members of the immunoglobulin superfamily (IgSF) encompass a large, diverse array of proteins that play central roles in immune response and neural development, and are implicated in diseases ranging from cancer to rheumatoid arthritis. Despite the potential biomedical benefits of understanding IgSF:IgSF cognate receptor-ligand interactions, relatively little about them is known at a molecular level, and experimentally probing all possible receptor-ligand pairs is prohibitively costly. The Protein Ligand Interface Design (ProtLID) algorithm is a computational pharmacophore-based approach to identify cognate receptor-ligand pairs that was recently validated in a pilot study on a small set of IgSF complexes. Although ProtLID has shown a success rate of 61% at identifying at least one cognate ligand for a given receptor, it currently lacks any form of confidence measure that can prioritize individual receptor-ligand predictions to pursue experimentally. In this study, we expanded the application of ProtLID to cover all IgSF complexes with available structural data. In addition, we introduced an approach to estimate the confidence of predictions made by ProtLID based on a statistical analysis of how the ProtLID-constructed pharmacophore matches the structures of candidate ligands. The confidence score combines the physicochemical compatibility, spatial consistency, and mathematical skewness of the distribution of matches throughout a set of candidate ligands. Our results suggest that a subset of cases meeting stringent confidence criteria will always have at least one successful receptor-ligand prediction. ",
        link: "https://pubmed.ncbi.nlm.nih.gov/33483991/",
        thumbnail:"",
    }
    
    
]
export default publicationList