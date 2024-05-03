import PageOne from "./PageOne";

const Credit = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      {reportToEdit && (
        <PageOne
          isEdit={isEdit}
          reportToEdit={reportToEdit}
          setReportToEdit={setReportToEdit}
        />
      )}
    </>
  );
};

export default Credit;
