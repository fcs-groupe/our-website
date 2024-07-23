import Contact from "@/components/Contact";
import DescribedItem from "@/components/DescribedItem";
import Grid from "@/components/Grid";
import Layout from "@/components/Layout";
import Partners from "@/components/Partners";

function Professionnel(props) {
  const gridItems = [
    {
      img: "/images/car-wash.svg",
      title: "NETTOYAGE DES PARCS AUTOMOBILES :",
      description:
        "FCS développe des services de nettoyage et de maintenance pour votre flotte d'entreprise.",
    },
    {
      img: "/images/time.svg",
      title: "ENTRETIEN PONCTUEL OU RÉGULIER :",
      description:
        "FCS offre aux gestionnaires de flotte la possibilité d'optimiser les retours de véhicules grâce à un entretien ponctuel proche de la remise à neuf des véhicules d'occasion ou à une planification régulière par le personnel de préparation de FCS sur les sites des clients.",
    },
    {
      img: "/images/customer.svg",
      title: "SERVICES SUR-MESURE :",
      description:
        "FCS associe au lavage des prestations annexes telles que le contrôle des niveaux, le relevé kilométrique.",
    },
    {
      img: "/images/settings.svg",
      title: "Reconditionnement VO :",
      description:
        "FCS répare les voitures d'occasion chez les concessionnaires pour optimiser la reprise.",
    },
    {
      img: "/images/stack.svg",
      title: "Stockage de proximité :",
      description:
        "FCS économise de l'espace pour les concessions en fournissant des solutions de stockage et en permettant aux concessions de consigner les véhicules.",
    },
  ];

  return (
    <Layout title="Professionnel">
      <DescribedItem
        title="Professionnel"
        description="Le réseau FCS offre aux gestionnaires de flotte un service sur mesure pour chaque entreprise, quelle que soit la taille de la flotte..Des interventions ponctuelles ou régulières sur site aux réparations de véhicules et au stockage de proximité, FCS et nos experts s'occupent de tout."
        flexDirection="row-reverse"
        img="/images/professionel.jpg"
      />
      <br />
      <Grid items={gridItems} />
      <br />
      <Contact />
      <br />
      <Partners />
      <br />
    </Layout>
  );
}

export default Professionnel;
