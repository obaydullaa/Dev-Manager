import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import FormTextInput from "../../layouts/FormTextInput";

const schema = yup.object({
  firstName: yup
    .string()
    .required("FistName is Required")
    .min(3, "FistName must be 3 or more in length"),
  lastName: yup
      .string()
    .required("LastName is Required")
    .min(3, "LastName must be 3 or more in length"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Must be a valid email"),
  profession: yup
    .string()
    .required("Profession is Required")
    .oneOf(["developer", "designer", "marketer"])
    .min(3, "Profession must be 3 or more in length"),
  bio: yup
    .string()
    .required("Bio is Required")
    .min(10, "Bio must be 10 or more in length")
    .max(300, "Bio must be equal or more 300 character"),
  image: yup
    .string()
    .required("Image Url is Required")
    .url("Must be a valid URL"),
});

function ContactForm({ addContact, contact, updateContact }) {
  // const [contact, setContact] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     profession: '',
  //     bio: '',
  //     dateOfBirth: new Date(),
  //     gender: 'male',
  //     image: '',
  // })
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const defaultValue = {
    firstName: contact?.firstName || "Obaydul",
    lastName: contact?.lastName || "Islam",
    gender: contact?.gender || "male",
    email: contact?.email || "obaaydulIslam@gmail.com",
    profession: contact?.profession || "developer",
    bio: contact?.bio || "All about myself, Modify of your own if necessary",
    image: contact?.image || "https://randomuser.me/api/portraits/men/78.jpg",
    dateOfBirth: contact?.dateOfBirth || new Date(),
  };
  const {
    firstName,
    lastName,
    email,
    profession,
    bio,
    image,
    gender,
    dateOfBirth,
  } = defaultValue;

  const [birthYear, setBirthYear] = useState(
    dateOfBirth ? dateOfBirth : new Date()
  );

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        bio: "",
        image: "",
      });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    setValue("dateOfBirth", birthYear);
  }, [birthYear]);
  // const handleChange = (evt) => {
  //     setContact({
  //         ...contact,
  //         [evt.target.name]: evt.target.value,
  //     })
  // }
  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     console.log(contact)
  //     // checking validation

  //     //Form Submission
  //     addContact(contact)
  // }
  const onSubmit = (data) => {
    const id = contact?.id;
   console.log(data)
    //show flash message
    //adding contacts
    // if (id) {
    //   toast.success("Contact is Updated Successfully");
    //   updateContact(data, id);
    // } else {
    //   toast.success("Contact is Added Successfully");

    //   addContact(data);
    // }
    // navigate("/contacts");
  };

  // const {firstName, lastName, email, profession, bio, dateOfBirth, gender, image} = contact
  return (
    <>
      <h2 className="text-center mb-5">
        {contact?.id ? "Edit Contact" : "Add Contact"}
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name="firstName"
          label="First Name"
          placeholder="Enter your First Name"
          errors={errors}
          register={register}
          defaultValue={firstName}
        />

        <FormTextInput
          name="lastName"
          label="Last Name"
          placeholder="Enter your Last Name"
          errors={errors}
          register={register}
          defaultValue={lastName}
        />

        <FormTextInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your Email"
          errors={errors}
          register={register}
          defaultValue={email}
        />
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select
              {...register("profession")}
              id="profession"
              defaultValue={profession}
              aria-label="Select your profession"
              isInvalid={errors?.profession}
            >
              <option value="" disabled>
                Select Your Profession
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="marketer">Marketer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors?.profession?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <FormTextInput
          name="image"
          label="Profile Picture"
          type="url"
          placeholder="Enter your Profile URL"
          errors={errors}
          register={register}
          defaultValue={image}
        />
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date Of Birth
            </Form.Label>
          </Col>
          <Col sm={9}>
            <DatePicker
              selected={birthYear}
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter Your Date"
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              onChange={(date) => setBirthYear(date)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Male"
              value="male"
              defaultChecked={gender === "male"}
              {...register("gender")}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Female"
              value="female"
              defaultChecked={gender === "female"}
              {...register("gender")}
            />
          </Col>
        </Form.Group>
        <FormTextInput
          name="bio"
          label="Bio"
          as="textarea"
          type="text"
          placeholder="Enter your Bio"
          errors={errors}
          register={register}
          defaultValue={bio}
          as='textarea'
        />
        {/* <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="bio" column>
              Bio
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Bio"
              defaultValue={bio}
              {...register("bio")}
              isInvalid={errors?.bio}
            />
            <Form.Control.Feedback type="invalid">
              {errors?.bio?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group> */}
        <Button
          className="text-center"
          variant="primary"
          size="md"
          type="submit"
          disabled={isSubmitting ? "disabled" : ""}
        >
          {contact?.id ? "Update Contact" : "Add Contact"}
        </Button>
      </Form>
    </>
  );
}
export default ContactForm;
