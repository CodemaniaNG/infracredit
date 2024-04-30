import { HStack } from "@chakra-ui/react";
import Button from "@/components/ui/Button";

const ActionBtns = ({
  isEdit,
  setIsEdit,
  handleModal,
  handleModal2,
  handleModal3,
  handleModal4,
  handleModal5,
  handleModal6,
  handleModal7,
  handleModal8,
  template,
  role,
}: any) => {
  return (
    <>
      <HStack justify="flex-end">
        {isEdit && (
          <Button
            text={"Cancel Edit"}
            bg="transparent"
            border="#FFCB8A"
            color="#FF8F00"
            borderWidth="1px"
            px={6}
            onClick={() => setIsEdit(!isEdit)}
          />
        )}
        {!isEdit && (
          <Button
            text="Share Report"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            borderWidth="1px"
            px={6}
            onClick={handleModal8}
          />
        )}
        <Button
          text={isEdit ? "Save" : "Edit Report"}
          onClick={() => setIsEdit(!isEdit)}
        />
      </HStack>

      {template === "report" && role === "user-reports" && (
        <HStack justify="flex-end">
          {isEdit && (
            <Button
              text={"Cancel Edit"}
              bg="transparent"
              border="#FFCB8A"
              color="#FF8F00"
              borderWidth="1px"
              px={6}
              onClick={() => setIsEdit(!isEdit)}
            />
          )}
          {!isEdit && (
            <Button
              text="Share Report"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              borderWidth="1px"
              px={6}
              onClick={handleModal8}
            />
          )}
          <Button
            text={isEdit ? "Save" : "Edit Report"}
            onClick={() => setIsEdit(!isEdit)}
          />
        </HStack>
      )}

      {template === "report" && role === "manager" && (
        <HStack justify="flex-end">
          <Button
            text="Disapprove"
            bg="transparent"
            border="#FF9D98"
            color="#FF3B30"
            borderWidth="1px"
            px={6}
            variant="outline"
            onClick={handleModal4}
          />
          <Button text={"Approve"} onClick={handleModal3} />
        </HStack>
      )}

      {template === "contract" && role === "user-contracts" && (
        <HStack justify="flex-end">
          <Button
            text="Share Contract"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            borderWidth="1px"
            onClick={handleModal2}
          />
          <Button text="Re-Upload Contract" px={6} onClick={handleModal} />
        </HStack>
      )}

      {template === "contract" && role === "manager" && (
        <HStack justify="flex-end">
          <Button
            text="Download Document"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            borderWidth="1px"
          />
          <Button text="Upload Signed PDF" px={6} onClick={handleModal5} />
        </HStack>
      )}

      {template === "report" && role === "supervisor" && (
        <HStack justify="flex-end">
          {isEdit && (
            <Button
              text={"Cancel Edit"}
              bg="transparent"
              border="#FFCB8A"
              color="#FF8F00"
              borderWidth="1px"
              px={6}
              onClick={() => setIsEdit(!isEdit)}
            />
          )}
          {!isEdit && (
            <Button
              text={"Return"}
              bg="transparent"
              border="#FF9D98"
              color="#FF3B30"
              borderWidth="1px"
              px={6}
              onClick={handleModal6}
            />
          )}
          <Button
            text={isEdit ? "Save" : "Edit Report"}
            bg="#F0FFFF"
            color="greens.100"
            px={6}
            onClick={() => setIsEdit(!isEdit)}
          />
          {!isEdit && <Button text={"Submit"} px={6} onClick={handleModal7} />}
        </HStack>
      )}
    </>
  );
};

export default ActionBtns;
