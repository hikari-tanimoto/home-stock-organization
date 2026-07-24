import { createSpace } from "@/app/spaces/actions";
import { SpaceForm } from "@/components/SpaceForm";

export default function NewSpacePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <SpaceForm
        action={createSpace}
        submitLabel="追加する"
        submittingLabel="追加中..."
      />
    </main>
  );
}
