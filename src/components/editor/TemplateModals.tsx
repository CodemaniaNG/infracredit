import Modal from "@/components/ui/Modal";
import ApproveReport from "@/components/modals/ApproveReport";
import DisapproveReport from "@/components/modals/DisapproveReport";
import ReturnReport from "@/components/modals/ReturnReport";
import SubmitReport from "@/components/modals/SubmitReport";

const TemplateModals = ({
  isOpen3,
  setIsOpen3,
  handleModal3,
  isOpen4,
  setIsOpen4,
  handleModal4,
  isOpen6,
  setIsOpen6,
  handleModal6,
  isOpen7,
  setIsOpen7,
  handleModal7,
  templateData,
}: any) => {
  return (
    <>
      <Modal
        isOpen={isOpen3}
        onClose={handleModal3}
        body={
          <ApproveReport setIsOpen={setIsOpen3} templateData={templateData} />
        }
      />

      <Modal
        isOpen={isOpen4}
        onClose={handleModal4}
        body={
          <DisapproveReport
            setIsOpen={setIsOpen4}
            templateData={templateData}
          />
        }
      />

      <Modal
        isOpen={isOpen6}
        onClose={handleModal6}
        body={
          <ReturnReport setIsOpen={setIsOpen6} templateData={templateData} />
        }
      />

      <Modal
        isOpen={isOpen7}
        onClose={handleModal7}
        body={
          <SubmitReport setIsOpen={setIsOpen7} templateData={templateData} />
        }
      />
    </>
  );
};

export default TemplateModals;
