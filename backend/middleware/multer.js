import multer from 'multer';

// Set up multer storage configuration
const storage = multer.diskStorage({ // Store files on the disk
 filename: function(req, file, callback) {
    callback(null,file.originalname); // Use the original file name
 }
});

// Create multer instance with storage configuration
const upload = multer({ storage });    


export default upload;  
