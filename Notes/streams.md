# STREAMS

// stream in js. ✅ 

// introduction
> // stream are not only for streaming video/audios
// understanding streams and buffers
// create http server
// Downloading big files from server (a good way and a bad way)
// copy files on file systems (a good way/ bad way)
// create custom streams (readable / writable / transform)
// string processing(a good way and bad way)
// pipes 

**STREAMS**

> Streams process data in small chunks instead of loading everything into memory at once, making them memory-efficient for handling large data.

> readable , writable or both

_without streaming :_
eg : file to copy one place to other 

// without streaming
data --load to memory--->  server memory ---copy to another file--->  data


__with Streaming__

// buffer : physical space available to memory

// sending data = readable stream
// receiving data = writable stream


data ---readable stream---> buffer -----writable stream-----> data


