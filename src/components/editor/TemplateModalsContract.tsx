import Modal from "@/components/ui/Modal";
import ReUpload from "@/components/modals/ReUpload";
import ShareContract from "@/components/modals/ShareContract";
import ShareReport from "@/components/modals/ShareReport";
import UploadSignedPDF from "@/components/modals/UploadSignedPDF";
import Chat from "../modals/Chat";

const TemplateModalsContract = ({
  isOpen,
  setIsOpen,
  handleModal,
  isOpen2,
  setIsOpen2,
  handleModal2,
  isOpen3,
  setIsOpen3,
  handleModal3,
  isOpen5,
  setIsOpen5,
  handleModal5,
  isOpen8,
  setIsOpen8,
  handleModal8,
  contractData,
}: any) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<ReUpload setIsOpen={setIsOpen} contractData={contractData} />}
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
        isOpen={isOpen5}
        onClose={handleModal5}
        body={<UploadSignedPDF setIsOpen={setIsOpen5} />}
      />

      <Modal
        isOpen={isOpen3}
        onClose={handleModal3}
        size="5xl"
        body={<Chat setIsOpen={setIsOpen3} contractData={contractData} />}
      />
    </>
  );
};

export default TemplateModalsContract;
