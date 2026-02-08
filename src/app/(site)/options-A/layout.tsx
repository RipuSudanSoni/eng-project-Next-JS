import Layout3Column from "@/components/Layout3Column/Layout3Column";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function GrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout3Column
        // sidebar={<Sidebar section="grammar" page="option_A" />}
        content={children}
      />
    </>
  );
}
