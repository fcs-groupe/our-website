import Contact from "@/components/Contact";
import DescribedItem from "@/components/DescribedItem";
import Grid from "@/components/Grid";
import Layout from "@/components/Layout";
import Partners from "@/components/Partners";

function Flotte(props) {
  const gridItems = [
    {
      img: "/images/car-wash.svg",
      title: "Préparation Esthétique (VN / VO)  :",
      description:
        "FCS offre un service complet de préparation esthétique (intérieur et extérieur) et s'adapte aux besoins NV, UV et VD de chaque client en concession ou en atelier.",
    },
    {
      img: "/images/time.svg",
      title: "Préparation Mécanique  :",
      description:
        "FCS vérifie électroniquement les VN et effectue les actions finales de démarrage (tests, vérification de niveau, vérifications, etc.)",
    },
    {
      img: "/images/clean-car.svg",
      title: "Lavage Atelier / Hall  :",
      description:
        "FCS aide les concessionnaires à améliorer la satisfaction des clients en nettoyant les véhicules du marché secondaire.",
    },
    {
      img: "/images/worker.svg",
      title: "Convoyage / Jockeyage  :",
      description:
        "Dans le cadre du service, FCS peut livrer le véhicule sur le site du client par route ou par transporteur.",
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
    <Layout title="Gestionnaire de Flotte">
      <DescribedItem
        title="Gestionnaire de Flotte"
        description="Une adaptabilité doublée à une réactivité pour vous proposer des solutions sur-mesure. Une adaptabilité doublée à une réactivité pour vous proposer des solutions sur-mesure. De la préparation esthétique en passant par la préparation mécanique sans oublier le convoyage et le stockage, le réseau s'adapte à vos problématiques."
        flexDirection="row-reverse"
        img="/images/flotte2.jpg"
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

export default Flotte;
