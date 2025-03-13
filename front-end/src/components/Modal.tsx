interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

function Modal({ open, closeModal }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold">Agendar Corte</h2>
        <p className="mt-2 text-gray-600">Escolha a data e horário.</p>
        <div className="mt-4">
          <input type="date" className="w-full p-2 border rounded" />
          <input type="time" className="w-full p-2 mt-2 border rounded" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={closeModal} // Chama onClose para fechar o modal
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
