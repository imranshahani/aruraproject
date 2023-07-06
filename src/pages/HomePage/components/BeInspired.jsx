import React from "react";
import styles from "../styles/footer.module.css";
import { useState } from "react";

const BeInspiredArea = () => {
  //button hover
  const [ishovered, setIsHovered] = useState(false);
  const handleHover = (e) => {
    setIsHovered(!ishovered);
    if (!ishovered) {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
    } else {
      e.target.style.backgroundColor = "black";
      e.target.style.color = "white";
    }
  };

  //bgcolor button

  const changedivClose = (e) => {
    e.target.style.display = "none";
  };

  //store values name and password
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  //error variable
  const [error, setError] = useState({});

  //update the state value
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //validationName  function
  const ValidationName = (values) => {
    //create object
    let errors = {};
    if (!values.name) {
      errors.name = "name is required!";
    } else if (values.name.length < 5) {
      errors.name = "name must be more than 5 characters!";
    }
    return errors;
  };

  //validationPassword  function
  const ValidationPassword = (values) => {
    //create object
    let errors = {};
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 8) {
      errors.password = "password must be more than 8 characters!";
    }
    return errors;
  };

  //name  click function
  const handleClickName = (e) => {
    e.preventDefault();
    setError(ValidationName(values));
  };
  //pass click function
  const handleClickPass = (e) => {
    e.preventDefault();
    setError(ValidationPassword(values));
  };

  return (
    <>
      <div className={styles.inspiredWrapper}>
        <div className={styles.inspiredContainer}>



          <div className={styles.header}>
            <h3>Be inspired, sign up now</h3>
            <div className={styles.para1}>
              <p>Never miss the latest offers from Evig, tips and demos, <br />
                news and invites to local events.</p>
            </div>
            <div className={styles.btn1}>
              <button
                className={styles.ishovered ? styles.hovered : {}}
                onMouseEnter={handleHover}>
                Subscribe Now
              </button>
            </div>
          </div>



          {ishovered && (

            <div className={styles.formSection} onMouseLeave={changedivClose}>


              <div className={styles.anytimeClassText}>
                <h3>We are here <br /> for you anytime</h3>
              </div>


              <div className={styles.input_container}>

                <div className={styles.form}>
                  <input
                    type={"text"}
                    required
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    onMouseLeave={handleClickName}
                    placeholder="john kelvin"
                  />
                  <label>Name</label>
                </div>


                <div className={styles.errorClass}>
                  {" "}
                  {error.name && <span>{error.name}</span>}
                </div>


                <div className={styles.form}>
                  <input
                    type="password"
                    required
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    onMouseLeave={handleClickPass}
                    placeholder="johnkelvin@gmail.com"
                  />
                  <label>Password</label>
                </div>



                <div className={styles.errorClass}>
                  {" "}
                  {error.password && <span>{error.password}</span>}
                </div>

                <div className={styles.para2}>
                  <p>
                    By signing up to Evig Electronics you accept that Evig
                    Electronics are contract.
                    <a href="#" style={{ color: "white" }}>
                      Read more.
                    </a>
                  </p>
                </div>


                <div className={styles.btn2}>
                  <button>
                    Subscribe now
                  </button>
                </div>



              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BeInspiredArea;
