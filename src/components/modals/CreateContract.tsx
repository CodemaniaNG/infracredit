import { Text, VStack, HStack } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";

const roles = [
  { value: "current", label: "Current Guarantee Porfolio Contract" },
  { value: "new", label: "New Guarantee Porfolio Contract" },
];

const industries = [
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "agriculture", label: "Agriculture" },
  { value: "finance", label: "Finance" },
];

const CreateContract = ({ setIsOpen }: any) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        {step === 1 ? "Create New Contract" : "Submit Company’s Information."}
      </Text>
      <Formik
        initialValues={{
          role: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            {step === 1 && (
              <VStack spacing={4}>
                <Select
                  label="Select Template"
                  name="role"
                  options={roles}
                  placeholder="Select template"
                />

                <Input
                  label="Date"
                  name="date"
                  type="date"
                  placeholder="Your email address"
                />

                <Input
                  label="Client Name"
                  name="clientName"
                  type="text"
                  placeholder="Your email address"
                />

                <Select
                  label="Select Industry"
                  name="industry"
                  options={industries}
                  placeholder="Select industry"
                />

                <VStack align="stretch" w={"100%"} mt={4}>
                  <Button
                    text="Continue"
                    px={4}
                    py={4}
                    type="button"
                    onClick={handleNext}
                  />
                </VStack>
              </VStack>
            )}

            {step === 2 && (
              <VStack spacing={4}>
                <Input
                  label="Date"
                  name="date"
                  type="date"
                  placeholder="Your email address"
                />

                <Input
                  label="Company’s Full Name"
                  name="clientName"
                  type="text"
                  placeholder="Your email address"
                />

                <Input
                  label="Company’s Full Address"
                  name="clientName"
                  type="text"
                  placeholder="Your email address"
                />

                <Input
                  label="Company’s Full Address"
                  name="clientName"
                  type="text"
                  placeholder="Your email address"
                />

                <VStack align="stretch" w={"100%"} mt={4}>
                  {step === 2 && (
                    <>
                      <Button
                        text="Create Contract"
                        px={4}
                        py={4}
                        type="button"
                      />

                      <Button
                        text="Go Back"
                        px={4}
                        py={4}
                        type="button"
                        onClick={handleBack}
                        bg="#F4F7FF"
                        color="maintText.200"
                        icon="/images/arrow-left.svg"
                        iconPosition="left"
                      />
                    </>
                  )}
                </VStack>
              </VStack>
            )}
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default CreateContract;
