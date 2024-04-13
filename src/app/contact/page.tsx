import { User, At, ChatText } from "@phosphor-icons/react/dist/ssr";

type InputLabels = {
  id: number;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
};

const contactFormOptions = [
  {
    id: 1,
    name: "name",
    placeholder: "Jane Doe",
    icon: <User size={24} />,
  },
  {
    id: 2,
    name: "email",
    placeholder: "helloworld@example.com",
    icon: <At size={24} />,
  },
  {
    id: 3,
    name: "message",
    placeholder: "e.g. Hello!",
    icon: <ChatText size={24} />,
  },
];

const ContactForm = () => {
  return contactFormOptions.map((input: InputLabels, index: number) => {
    return (
      <>
        <div className="flex flex-row space-x-3 justify-center" key={input.id}>
          {input.icon}
          {input.id === 3 ? (
            <textarea
              className="rounded-sm bg-transparent w-1/2 overflow-scroll resize-none  max-full max-h-80"
              placeholder={input.placeholder}
            ></textarea>
          ) : (
            <input
              className="rounded-sm bg-transparent w-1/2"
              name={input.name}
              placeholder={input.placeholder}
            />
          )}
        </div>
      </>
    );
  });
};
export default function ContactPage() {
  return (
    <div className="mt-8 flex py-6 flex-col space-y-6 sm:w-3/5 mx-auto  rounded-md drop-shadow-lg border bg-eggplant50 border-eggplant dark:border-midnightGreen ">
      <ContactForm />
      <button className="rounded bg-pistachio" type="submit">
        Send
      </button>
    </div>
  );
}
