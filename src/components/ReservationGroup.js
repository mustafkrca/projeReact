import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../pages/SignUp";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  phoneNumber: Yup.string().required(
    "Telefon alanının doldurulması zorunludur"
  ),
});

const schema2 = Yup.object().shape({
  eMail: Yup.string()
    .required("E-Posta alanının doldurulması zorunludur")
    .email("E-Mail formatı geçerli değil"),
});

export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-8 ">
          <Formik
            validationSchema={schema}
            initialValues={{
              service: "",
              phoneNumber: "",
              date: "",
              period: "",
            }}
            onSubmit={(values) => {
              const data = {
                Service: values.service,
                PhoneNumber: values.phoneNumber,
                Day: values.date,
                Clock: values.period,
              };

              const url = "https://localhost:7017/api/users/reservation";
              axios
                .post(url, data)
                .then((result) => {
                  alert(JSON.stringify(result.data)); 
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="reservation-form">
                <form noValidate onSubmit={handleSubmit}>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Almak istediginiz hizmeti seçiniz!</h6>
                    <label>
                      <Field type="radio" name="service" value={"3"} />
                      LaserTag
                    </label>
                    <label>
                      <Field type="radio" name="service" value={"2"} />
                      Playstation
                    </label>
                    <label>
                      <Field type="radio" name="service" value={"1"} />
                      PC
                    </label>
                  </div>
                  <div className="phoneNumber">
                    <h6>Telefon Numaranızı Yazınız</h6>
                    <input
                      type="tel"
                      maxLength={11}
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      placeholder="05xxxxxxxxx"
                      className="form-control inp_text"
                      id="phoneNumber"
                    />
                  </div>
                  <p className="error">
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </p>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Gün Seçiniz</h6>
                    <label>
                      <Field type="radio" name="date" value={"1"} />
                      Pazartesi
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"2"} />
                      Salı
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"3"} />
                      Çarşamba
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"4"} />
                      Perşembe
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"5"} />
                      Cuma
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"6"} />
                      Cumartesi
                    </label>
                  </div>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Lütfen Saat Seçiniz</h6>
                    <div>
                      <label>
                        <Field type="radio" name="period" value={"10"} />
                        10.00-11.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"11"} />
                        11.00-12.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"12"} />
                        12.00-13.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"13"} />
                        13.00-14.00
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field type="radio" name="period" value={"14"} />
                        14.00-15.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"15"} />
                        15.00-16.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"16"} />
                        16.00-17.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"17"} />
                        17.00-18.00
                      </label>
                    </div>
                  </div>

                  <div className="submit-button">
                    <button type="submit" className="button-36">
                      Rezervasyon
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>

        <div className="col-6 col-md-4">
          {/* login */}
          <Formik
            validationSchema={schema2}
            initialValues={{ eMail: "", password: "" }}
            onSubmit={(values) => {
              const data = {
                Email: values.eMail,
                Password: values.password,
              };

              const url = "https://localhost:7017/api/users/loginuser";
              axios
                .post(url, data)
                .then((result) => {
                  alert(JSON.stringify(result.data));
                  localStorage.setItem('email', values.eMail);
                  localStorage.setItem('password', values.password);
                  localStorage.setItem('access', 1);

                })
                .catch((error) => {
                  alert(error);
                });
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login">
                {localStorage.getItem("access") == 1 ? <h3> Giris Yapıldı!</h3>  :  <h3> Giris Yap!</h3>}
                <div className="form">
                  <form noValidate onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="eMail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="E-Posta"
                      className="form-control inp_text"
                      id="eMail"
                    />
                    <p className="error">
                      {errors.eMail && touched.eMail && errors.eMail}
                    </p>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Parola"
                      className="form-control"
                    />
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <button type="submit" onClick={() => window.location.reload(false)}>Giriş Yap</button>
                  </form>
                  <a href={"/signup"} element={<SignUp />}>
                    Üye Değil Misin? Kayıt Ol!
                  </a>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
