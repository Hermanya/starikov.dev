import React, { useState } from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";
import { useAmlifyApi } from "api/amplify";

type Note = {
  text: string;
  tags: string[];
  createdAt: number;
};

const Notes: React.FC<{ slotArgs: string[] }> = ({ slotArgs: [username] }) => {
  const [data, updateData] = useAmlifyApi(username, `Notes`);
  const notes: Note[] = data.Notes || [];
  const [noteText, setNoteText] = useState("");

  return (
    <>
      <Gap />
      <section
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title>{username} Notes</Title>
        <Gap />
        {localStorage.Login === username && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              updateData({
                Notes: [
                  ...notes,
                  {
                    text: noteText,
                    createdAt: Date.now(),
                  } as Note,
                ],
              });
              setNoteText("");
            }}
          >
            <Gap />
            <input
              placeholder="Note"
              onChange={(event) => setNoteText(event.target.value)}
              value={noteText}
            />

            <button type="submit">Submit</button>
          </form>
        )}
        {notes
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((note) => (
            <div key={note.createdAt}>
              <Gap />
              <Card withPadding>
                {note.text}
                <Gap />
                <small>{new Date(note.createdAt).toLocaleString()}</small>
              </Card>
            </div>
          ))}
      </section>
      <Gap />
      <div style={{ flex: 1, justifySelf: "flex-end" }}>
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={[username]}
            from={"Notes"}
            fromArgs={[username]}
          >
            More from {username}
          </NavigationLinkListItem>
        </Card>
      </div>
      <Gap />
    </>
  );
};

export default Notes;
