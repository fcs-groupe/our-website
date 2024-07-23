import styles from "@/styles/components/Locations.module.scss";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function Locations(props) {
  const locations = [
    {
      id: 1,
      name: "TotalWash",
      coordinates:
        "Parking indigo Saint germain Niv-1; 169 Boulevard Saint Germain, 75006 Paris",
    },
    {
      id: 2,
      name: "TotalWash",
      coordinates:
        "Parking indigo place vendome Niv -1; 28 Place Vendome, 75001 Paris",
    },
    {
      id: 3,
      name: "TotalWash",
      coordinates:
        "Parking indigo Paris Louvre Samaritaine Niv -1; Pl; Du Louvre, 75001 Paris",
    },
    {
      id: 4,
      name: "TotalWash",
      coordinates:
        "Parking indigo Saint sulpice Niv -2; 8 place saint sulpice, 75006 Paris",
    },
    {
      id: 5,
      name: "TotalWash",
      coordinates:
        "Parking indigo Muse Niv -2; 2 rue des messageries, 57000 Metz",
    },
    {
      id: 6,
      name: "TotalWash",
      coordinates:
        "Parking indigo Réaumur Saint Denis Niv -1; 40 rue Dussoubs, 75002 Paris",
    },
    {
      id: 7,
      name: "TotalWash",
      coordinates:
        "Parking indigo Marché St Honoré Niv -2; 39 Place du marché Saint Honoré, 75001 Paris",
    },
    {
      id: 8,
      name: "TotalWash",
      coordinates:
        "Parking indigo Paris Soufflot Pnthéon Niv -2; 22 Rue Soufflot, 75005 Paris",
    },
    {
      id: 9,
      name: "TotalWash",
      coordinates:
        "Parking indigo Croix des petits champs Niv-2; 14 Rue croix des petits champs, 75001 Paris",
    },
    {
      id: 10,
      name: "TotalWash",
      coordinates:
        "Parking indigo Paris Saint Martin Niv ; 254 Rue saint martin face au, 75003 PARIS",
    },
    {
      id: 11,
      name: "TotalWash",
      coordinates:
        "Parking indigo Paris Saint Martin Niv ; 254 Rue saint martin face au, 75003 PARIS",
    },
    {
      id: 12,
      name: "TotalWash",
      coordinates:
        "Parking indigo Pologne Niv-1; 63 Rue de Pologne, 78100 Saint Germain en Laye",
    },
  ];
  return (
    <div className={styles.container}>
      {locations.map((l) => {
        return (
          <div className={styles.col}>
            <FmdGoodIcon sx={{ fontSize: "50px" }} />
            <p>{l.name}</p>
            <p>{l.coordinates}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Locations;
