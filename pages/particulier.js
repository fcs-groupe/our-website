import Contact from "@/components/Contact";
import DescribedItem from "@/components/DescribedItem";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import Partners from "@/components/Partners";

function Particulier(props) {
  return (
    <Layout title="Particulier">
      <DescribedItem
        title="Particulier"
        description="Le réseau FCS offre aux gestionnaires de flotte un service sur mesure pour chaque entreprise, quelle que soit la taille de la flotte..Des interventions ponctuelles ou régulières sur site aux réparations de véhicules et au stockage de proximité, FCS et nos experts s'occupent de tout."
        flexDirection="row-reverse"
        img="/images/particulier.jpg"
      />
      <br />
      <Locations />
      <br />
      <Contact />
      <br />
      <Partners />
      <br />
    </Layout>
  );
}

export default Particulier;
