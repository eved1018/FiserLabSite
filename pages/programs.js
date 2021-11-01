import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


const Programs  = () => (
<Container> 
    <Layout title="Programs">        
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Our Programs
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="TF2DNA"
                    description='Structure-based determination of transcription factor binding sites TF2DNA installation program'
                    href="http://fiserlab.org/TF2DNA.tar.gz"
                />
                <GridItem
                    title="RF_HA_SRS RF_CB_SRS_OD"
                    description='Statistical pair potentials'
                    href="http://www.fiserlab.org/potentials/"
                />
                </SimpleGrid>
            </Section>
            <Section delay={0.2}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                <GridItem
                    title="SmotifCOMP program"
                    description='SmotifCOMP program (293M)'
                    href="http://www.fiserlab.org/SmotifCOMP.tar.gz"
                />
                <GridItem
                    title="Smotif database"
                    description='Smotif Database (MySQL, compressed, 428Mb!)'
                    href="http://www.fiserlab.org/Smotifs_redundant_01282011.sql.gz"
                />
                
                </SimpleGrid>
            </Section>
            
            <Section delay={0.3}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                <GridItem
                    title="SmotifCOMPSuperfamilyNetwork"
                    description='SmotifCOMP-based SCOP Superfamily network'
                    href="http://www.fiserlab.org/SmotifCOMPSuperfamilyNetwork.txt"
                />
                <GridItem
                    title="SmotifCS"
                    description='SMOTIFCS implement a hybrid protein modeling algorithms that relies on a library of protein super-secondary structure motifs (Smotifs) and easily obtainable NMR experimental data.'
                    href="http://search.cpan.org/dist/SmotifCS/lib/SmotifCS.pm"
                />
                </SimpleGrid>
            </Section>

            <Section delay={0.4}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                <GridItem
                    title="remodel_pdb"
                    description='Software for remodeling the missing residues in the entire PDB, these remodeled structures can be used in the SmotifTF package.'
                    href="http://fiserlab.org/remodel_pdb.tar.gz"
                />
                <GridItem
                    title="SAMMI"
                    description='MI-score calculates the average mutual information score for a given multipe sequence alignment.'
                    href="http://fiserlab.org/aln_mi_calc_for_distrib.tar.gz"
                />
                </SimpleGrid>
            </Section>


        </Container>
    </Layout>
    

    <Layout title="Serves">        
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Our Servers
        </Heading>
        <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
                title="BlastProfiler"
                description='Sequence alignment profile generator.'
                href="http://manaslu.fiserlab.org/blastprofiler.html"
            />
            <GridItem
                title="ModLoop"
                description='Modeling loops in protein structures.'
                href="http://www.salilab.org/modloop/modloop.html"
            />
            </SimpleGrid>
        </Section>
        <Section delay={0.2}>
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
                title="Loop decoy sets"
                description='500-500 8 and 12 residue long, optimized loops for 40 proteins.'
                href="http://www.fiserlab.org/loops_decoys/"
            />
            <GridItem
                title="MMM server"
                description='Multiple Mapping Method: a sequence-to-structure alignment tool.'
                href="http://manaslu.fiserlab.org/MMM/"
            />
            
            </SimpleGrid>
        </Section>
        
        <Section delay={0.3}>
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
                title="M4T server"
                description='Comparative Modelling using a combination of multiple templates and interative optimization of alternative alignments.'
                href="http://manaslu.fiserlab.org/M4T"
            />
            <GridItem
                title="MMMTree server"
                description='Comparative Modelling using an iterative sequence to structure alignmnet approach.'
                href="http://manaslu.fiserlab.org/MMMTree"
            />
            </SimpleGrid>
        </Section>

        <Section delay={0.4}>
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
                title="ArchPred server"
                description='A template based loop structure prediction server.'
                href="http://manaslu.fiserlab.org/loopred"
            />
            <GridItem
                title="Cysredox"
                description='Predicting oxidation states of Cys residues from sequences of proteins.'
                href="http://manaslu.fiserlab.org/cysredox.html"
            />
            </SimpleGrid>
        </Section>
        <Section delay={0.5}>
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
                title="Autopublish"
                description='Web Tool to speed up protein structure publications and annotation.'
                href="http://ogre.aecom.yu.edu/autopublish-cgi/index.cgi"
            />
            </SimpleGrid>
        </Section>


    </Container>
    </Layout>
</Container>
)
export default Programs

