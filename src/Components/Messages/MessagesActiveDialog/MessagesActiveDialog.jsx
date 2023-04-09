import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../API/api";
import Preloader from "../../common/Preloader/Preloader";
import DialogBody from "./DialogBody/DialogBody";
import DialogHeader from "./DialogHeader/DialogHeader";
import DialogSendMessage from "./DialogSendMessage/DialogSendMessage";
import c from "./MessagesActiveDialog.module.scss";

export default function MessagesActiveDialog({ usersData, authUserData }) {
  let { dialogId } = useParams();
  const [dialogData, setDialogData] = useState([]);
  const [isPending, setIsPending] = useState();

  useEffect(() => {
    if (dialogId) {
      setIsPending(true);
      API.getMessages(dialogId).then((data) => {
        setDialogData(data.items);
        setIsPending(false);
      });
    }
  }, [dialogId]);

  return (
    <>
      {isPending ? (
        <Preloader />
      ) : (
        <div>
          {dialogId && (
            <div className={c.active_dialog}>
              <DialogHeader usersData={usersData} />
              <DialogBody dialogData={dialogData} authUserData={authUserData} />
              <DialogSendMessage
                dialogData={dialogData}
                setDialogData={setDialogData}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
