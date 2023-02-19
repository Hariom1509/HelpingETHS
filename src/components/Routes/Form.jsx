import React  from "react";
import { useForm } from "react-cool-form";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

const File = ({ label, id, error, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type = "file" id={id} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );

const Textarea = ({ label, id, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </div>
  );

const Date = ({label, id, error, ...rest }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="date" id={id} {...rest} />
        {error && <p>{error}</p>}
    </div>
);

const Num = ({label, id, error, ...rest }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" pattern="[0-9]*" id={id} {...rest} />
        {error && <p>{error}</p>}
    </div>
);

const Form = () => {
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => console.log("onSubmit: ", values),
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true }); // Default is "false"

  return (
    <form ref={form} noValidate style = {{backgroundColor: '#1b1624', color: "white",}}>
    <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
      <Field
        label="User Name"
        placeholder = "Hariom Vyas"
        id="username"
        name="username"
        // Support built-in validation
        required
        error={errors.username}
      />
      </Col>
      <Col lg={6} md={6} sm={12} xs={12}>
      <Field
        label="Mission Name"
        placeholder = "Aid Edu @ Stanford"
        id="name"
        name="name"
        type="text"
        required
        error={errors.name}
      />
      </Col>
     </Row>
      <Textarea label="Description" id="desc" name="desc"  placeholder = "Describe your mission in few words..." />
      <Num
        label="ETH Amount"
        placeholder = "Amount required for fund raising"
        id="num"
        name="num"
        type="num"
        required
        error={errors.num}
      />
      <Date 
        label = "Deadline"
        id = "date"
        name="date"
        type="date"
        required
        error={errors.date}
      />
      <File 
        label = "Picture/Document"
        id = "file"
        name="file"
        type="file"
        error={errors.file}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;