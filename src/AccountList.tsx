import { useState } from "react";
import {
  CreateButton,
  Button,
  Datagrid,
  ImageField,
  List,
  TextField,
  TextInput,
  FunctionField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
  Confirm,
} from "react-admin";

const accountFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Full Name" source="name" defaultValue="Jessica Chan" />,
  <TextInput label="Email" source="email" defaultValue="jess@mom.gov.sg" />,
  <TextInput label="Roles" source="roles" defaultValue="Admin" />,
];

export const AccountList = () => {
  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const handleEnable = () => setOpenEnable(true);
  const handleDisable = () => setOpenDisable(true);
  const handleEnableDialogClose = () => setOpenEnable(false);
  const handleDisableDialogClose = () => setOpenDisable(false);
  const handleConfirm = () => {
    setOpenEnable(false);
    setOpenDisable(false);
  };
  return (
    <List exporter={false} filters={accountFilters}>
      <Datagrid rowClick="show">
        <FunctionField
          label="Full Name"
          source="name"
          render={(record) =>
            record.status === "disabled" ? (
              <TextField
                label="Full Name"
                source="name"
                sx={{ color: "#cecece" }}
              />
            ) : (
              <TextField label="Full Name" source="name" />
            )
          }
        />
        <FunctionField
          label="Email Address"
          source="email"
          render={(record) =>
            record.status === "disabled" ? (
              <TextField
                label="Email Address"
                source="email"
                sx={{ color: "#cecece" }}
              />
            ) : (
              <TextField label="Email Address" source="email" />
            )
          }
        />
        <ReferenceArrayField
          label="Roles"
          reference="roles"
          source="roles"
          // cellClassName="hiddenOnSmallScreens"
          // headerClassName="hiddenOnSmallScreens"
        >
          <SingleFieldList>
            <ChipField source="name" size="small" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
        <FunctionField
          render={(record) =>
            record.status === "disabled" ? (
              <>
                <button onClick={handleEnable} className="enableButton">
                  ENABLE
                </button>
                <Confirm
                  BackdropProps={{
                    style: {
                      backgroundColor: "rgb(255,255,255,0.15)",
                    },
                  }}
                  isOpen={openEnable}
                  title="Proceed to enable selected account?"
                  onConfirm={handleConfirm}
                  onClose={handleEnableDialogClose}
                />
              </>
            ) : (
              <>
                <button onClick={handleDisable} className="disableButton">
                  DISABLE
                </button>
                <Confirm
                  BackdropProps={{
                    style: {
                      backgroundColor: "rgb(255,255,255,0.15)",
                    },
                  }}
                  isOpen={openDisable}
                  title="Proceed to disable selected account?"
                  onConfirm={handleConfirm}
                  onClose={handleDisableDialogClose}
                />
              </>
            )
          }
        />
      </Datagrid>
    </List>
  );
};
