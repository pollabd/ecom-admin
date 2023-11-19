"use client";

import Modal from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <main>
      <div className="p-4">
        <Modal title="'test" description="test des" isOpen onClose={() => {}}>
          chat
        </Modal>
      </div>
    </main>
  );
}
