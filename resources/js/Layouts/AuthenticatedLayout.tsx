import Navbar from "@/Components/App/Navbar";
import { usePage } from "@inertiajs/react";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export default function AuthenticatedLayout({
  header,
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  const props = usePage().props;
  const user = usePage().props.auth.user;

  const [successMessages, setSuccessMessaages] = useState<any[]>([]);
  const timoutRefs = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>(
    {}
  );

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  useEffect(() => {
    if (props.success.message) {
      const newMessage = {
        ...props.success,
        id: props.success.time,
      };

      setSuccessMessaages((prevMessages) => [newMessage, ...prevMessages]);

      const timeoutId = setTimeout(() => {
        setSuccessMessaages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== newMessage.id)
        );

        delete timoutRefs.current[newMessage.id];
      }, 5000);

      timoutRefs.current[newMessage.id] = timeoutId;
    }
  }, [props.success]);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      {header && (
        <header className="bg-white shadow dark:bg-gray-800">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      {props.error && (
        <div className="container px-8 mx-auto mt-8">
          <div className="alert alert-error">{props.error}</div>
        </div>
      )}

      {successMessages.length > 0 && (
        <div className="toast toast-top toast-end z-[1000] mt-16">
          {successMessages.map((msg) => (
            <div className="alert alert-success" key={msg.id}>
              <span>{msg.message}</span>
            </div>
          ))}
        </div>
      )}

      <main>{children}</main>
    </div>
  );
}
