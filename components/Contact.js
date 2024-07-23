import styles from "@/styles/components/Contact.module.scss";
import { getError } from "@/utils/config/getError";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

function Contact(props) {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/contact", formData);
      enqueueSnackbar(data.message, { variant: "success" });
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      enqueueSnackbar(getError(error), { variant: "error" });
      setLoading(false);
    }
  };
  return (
    <div className={styles.container} id="contact">
      <div className={`${styles.col} + ${styles.maps}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5143686317397!2d2.2137335763422556!3d48.886533671335926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664edb5503093%3A0x502c42f8307ae7e8!2s215%20Av.%20Georges%20Clemenceau%2C%2092000%20Nanterre%2C%20France!5e0!3m2!1sen!2stn!4v1721495205997!5m2!1sen!2stn"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.col}>
        <div className={styles.form}>
          <p>contactez-nous</p>
          <div className="hr" style={{ margin: "5px" }} />
          <form onSubmit={sendMail}>
            <div className={styles.row}>
              <input
                className="defaultInput"
                type="text"
                placeholder="Nom*"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                required
              />
              <input
                className="defaultInput"
                type="text"
                placeholder="Prénom*"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                required
              />
            </div>
            <div className={styles.row}>
              <input
                className="defaultInput"
                type="number"
                placeholder="Téléphone*"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                required
              />
              <input
                className="defaultInput"
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div className={styles.row}>
              <textarea
                className="defaultInput"
                placeholder="Message"
                style={{ height: "150px" }}
                name="message"
                value={formData.message}
                onChange={onChange}
                required
              />
            </div>
            <p>Votre adresse courriel ne sera pas publiée *</p>
            <button>
              {loading ? (
                <CircularProgress sx={{ color: "#ccc" }} size={25} />
              ) : (
                "Envoyer"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
