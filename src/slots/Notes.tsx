import React, { useState } from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";
import { useAmlifyApi } from "api/amplify";
import { FixedLayout } from "components/FixedLayout";

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
    <FixedLayout
      before={
        <>
          <Title>{`${username}'s Notes`}</Title>
          <Gap />
          {`${notes.length} total`}
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
        </>
      }
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={[username]}
            from={"Notes"}
            fromArgs={[username]}
          >
            More from {username}
          </NavigationLinkListItem>
          <NavigationLinkListItem
            to={"FitnessLog"}
            toArgs={[username]}
            from={"Notes"}
            fromArgs={[username]}
          >
            test
          </NavigationLinkListItem>
        </Card>
      }
    >
      {notes
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((note, index) => (
          <div key={note.createdAt}>
            {index > 0 && <Gap />}
            <Card withPadding>
              {note.text}
              <Gap />
              <small>{new Date(note.createdAt).toLocaleString()}</small>
            </Card>
          </div>
        ))}
    </FixedLayout>
  );
};

export default Notes;
