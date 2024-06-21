import { useState } from 'react';

export function AddNotesBatch() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('/api/notes', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('File uploaded successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error uploading file');
      });
  };

  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Adicionar notas em lote
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4 py-8'>
            <label htmlFor="file" className='block text-slate-700 font-bold mb-2'>
              Selecione um arquivo
            </label>
            <input
              type="file"
              id="file"
              className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleFileChange}
            />
          </div>
          <div className='flex justify-end space-x-4'>
            <button
              type='submit'
              className='bg-pmpa-blue-500 hover:bg-pmpa-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Inserir Notas
            </button>
            <button
              className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={() => window.history.back()}
            >
              Voltar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
