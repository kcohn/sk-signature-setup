const UploadButton = ({ onClick }) => {
    return (
      <div className="bg-none flex items-center justify-center">
        <button 
            className="cldbtn px-6 py-2 font-medium w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            onClick={onClick}
        >
          Select Image
        </button>
      </div>
    );
  };
  
  export default UploadButton;