import PageOne from "./PageOne";

const pages = [PageOne];

const NDA = ({
  isEdit,
  contractToDisplay,
  setContractToDisplay,
  companyAddress,
  companyName,
  companyRegNo,
  contractDate,
  contractData,
}: any) => {
  const parsedContract = JSON.parse(contractToDisplay);
  return (
    <>
      {contractToDisplay && parsedContract && !isEdit && (
        <>
          {pages.map((PageComponent, index) => (
            <PageComponent
              key={index}
              contractToDisplay={parsedContract}
              isEdit={isEdit}
              companyAddress={companyAddress}
              companyName={companyName}
              companyRegNo={companyRegNo}
              contractDate={contractDate}
              contractData={contractData}
            />
          ))}
        </>
      )}
    </>
  );
};

export default NDA;
