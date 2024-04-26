import {
  User,
  At,
  ChatText,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

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
  return contactFormOptions.map((input: InputLabels) => {
    return (
      <div className="flex flex-row space-x-3 justify-center" key={input.id}>
        {input.icon}
        {input.id === 3 ? (
          <textarea
            className="rounded-md placeholder-gray-500  bg-transparent w-1/2 overflow-scroll h-full max-h-60"
            placeholder={input.placeholder}
          ></textarea>
        ) : (
          <input
            className="rounded-md bg-transparent placeholder-gray-500 w-1/2"
            name={input.name}
            placeholder={input.placeholder}
          />
        )}
      </div>
    );
  });
};
export default function ContactPage() {
  return (
    <div className="mt-8 py-6 space-y-6 sm:w-1/2 mx-auto rounded-md sm:shadow-lg border border-eggplant dark:border-midnightGreen ">
      <ContactForm />
      <div className="flex justify-center h-10 py-2 hover:outline-double rounded-md mx-auto w-20 bg-brunswickGreen dark:bg-cherryBlossomPink text-brunswickGreen dark:text-cherryBlossomPink hover:bg-brunswickGreen50 dark:hover:bg-cherryBlossomPink50">
        <PaperPlaneTilt
          cursor={"pointer"}
          size={24}
          className="text-cherryBlossomPink dark:text-brunswickGreen"
          type="submit"
        >
          Send
        </PaperPlaneTilt>
      </div>
    </div>
  );
}
