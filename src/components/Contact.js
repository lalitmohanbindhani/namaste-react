//rafce

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Message"
        />
        <button className="border border-black m-2 px-4 p-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
