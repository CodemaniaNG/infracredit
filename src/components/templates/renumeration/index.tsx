import PageOne from "./PageOne";

const Renumeration = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <PageOne
        isEdit={isEdit}
        reportToEdit={reportToEdit}
        setReportToEdit={setReportToEdit}
      />
    </>
  );
};

export default Renumeration;
