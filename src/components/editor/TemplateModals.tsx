import Modal from "@/components/ui/Modal";
import ReUpload from "@/components/modals/ReUpload";
import ShareContract from "@/components/modals/ShareContract";
import ShareReport from "@/components/modals/ShareReport";
import ApproveReport from "@/components/modals/ApproveReport";
import DisapproveReport from "@/components/modals/DisapproveReport";
import UploadSignedPDF from "@/components/modals/UploadSignedPDF";
import ReturnReport from "@/components/modals/ReturnReport";
import SubmitReport from "@/components/modals/SubmitReport";

const TemplateModals = ({
  isOpen,
  setIsOpen,
  handleModal,
  isOpen2,
  setIsOpen2,
  handleModal2,
  isOpen3,
  setIsOpen3,
  handleModal3,
  isOpen4,
  setIsOpen4,
  handleModal4,
  isOpen5,
  setIsOpen5,
  handleModal5,
  isOpen6,
  setIsOpen6,
  handleModal6,
  isOpen7,
  setIsOpen7,
  handleModal7,
  isOpen8,
  setIsOpen8,
  handleModal8,
  templateData,
}: any) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<ReUpload setIsOpen={setIsOpen} />}
      />

      <Modal
        isOpen={isOpen2}
        onClose={handleModal2}
        body={<ShareContract setIsOpen={setIsOpen2} />}
      />

      <Modal
        isOpen={isOpen8}
        onClose={handleModal8}
        body={<ShareReport setIsOpen={setIsOpen8} />}
      />

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
        isOpen={isOpen5}
        onClose={handleModal5}
        body={<UploadSignedPDF setIsOpen={setIsOpen5} />}
      />

      <Modal
        isOpen={isOpen6}
        onClose={handleModal6}
        body={<ReturnReport setIsOpen={setIsOpen6} />}
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
