import Statuslabel, { Status } from "@/app/components/status-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Statuslabel status={Status.Active}>Active</Statuslabel>
      <Statuslabel status={Status.NotActive}>Not Activ</Statuslabel>
      <Statuslabel status={Status.Pending}>Pending</Statuslabel>
      <Statuslabel status={Status.Suspended}>Suspended</Statuslabel>
    </main>
  );
}
