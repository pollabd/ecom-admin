"use client";

import React from "react";
import Modal from "../ui/modal";

export const StoreModal = () => {
  return (
    <Modal
      title="Create Store"
      description="Add a new store"
      isOpen={false}
      onClose={() => {}}
    >
      Future modal
    </Modal>
  );
};
