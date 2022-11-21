import { AppConfig } from '@/config';
import { UploadOutlined } from '@ant-design/icons';
import { notification, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import s from './UploadFile.module.scss';

interface Props {
  placeholder?: string;
  label?: string;
  onFileUploaded?: any;
  onChange?: (value: any) => void;
  value?: any;
  maxUploadAllowed?: number;
  type?: 'small' | 'large';
  className?: string;
}

const UploadFile: FC<Props> = ({
  placeholder = '',
  label = 'Upload file',
  onFileUploaded,
  onChange,
  value = [],
  maxUploadAllowed = 4,
  type = 'small',
  className = '',
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [fileList, updateFileList] = useState<any>([]);

  useEffect(() => {
    if (typeof onFileUploaded === 'function') {
      onFileUploaded(uploadedFiles);
    }
    if (
      value !== uploadedFiles &&
      (value.length > 0 || uploadedFiles.length > 0)
    ) {
      if (onChange) {
        onChange(uploadedFiles);
      }
    }
  }, [uploadedFiles]);

  useEffect(() => {
    if (value.length > 0) {
      let temp: any = [...value];
      console.log(value);
      temp = temp.map((item: any) => {
        return {
          uid: item.uid,
          name: item.name,
          status: 'done',
          url: item.thumbnailImage,
        };
      });
      updateFileList(temp);
      setUploadedFiles(value);
    }
  }, [value]);

  const handleChange = ({ file, fileList }: UploadChangeParam) => {
    let tempFiles = uploadedFiles;
    let deletedImage = null;
    console.log(file);

    switch (file.status) {
      case 'done':
        break;
      case 'removed':
        deletedImage = tempFiles.find((currentImageItem: any) => {
          return currentImageItem.uid === file.uid;
        });
        tempFiles = tempFiles.filter((cfile: any) => cfile.uid !== file.uid);
        if (deletedImage.fileData && deletedImage.fileData.id) {
          deleteImage(deletedImage.fileData.id);
        }
        setUploadedFiles(tempFiles);
        break;
      case 'error':
        tempFiles = fileList.filter((cfile) => cfile.uid !== file.uid);
        updateFileList([...tempFiles]);
        break;
    }
    if (file.status !== 'error') {
      updateFileList([...fileList]);
    }
  };

  const uploadImage = async (options: any) => {
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Authorization: `Bearer ${auth?.token}`,
      },
      onUploadProgress: (event: any) => {
        // const percent = Math.floor((event.loaded / event.total) * 100);
        // setProgress(percent);
        // if (percent === 100) {
        //     setTimeout(() => setProgress(0), 1000);
        // }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    formData.append('files', file);

    try {
      const res = await axios({
        method: 'post',
        url: `${AppConfig.API_URL}/media/upload`,
        data: formData,
        headers: {
          'Content-Type': `multipart/form-data;`,
        },
      });

      const thumbnailImage = fileList.find(
        (singleFile: any) => singleFile.uid === file.uid
      );
      console.log(thumbnailImage, 'thumbnailImage');

      onSuccess('Ok');
      // file['id'] = res.data.data[0];
      // updateFileList([...fileList, file]);
      setUploadedFiles([
        ...uploadedFiles,
        {
          uid: file.uid,
          fileData: res.data.data[0],
          name: res.data.data[0].orignalFileName,
          // thumbnailImage: thumbnailImage.thumbUrl,
          thumbnailImage: res.data.data[0].orignalFileName,
        },
      ]);
    } catch (err) {
      console.log(err);
      onError({ err });
      const tempFiles: any = fileList;
      tempFiles.filter((file: any) => file.uid !== tempFiles.uid);
      notification.error({
        message: 'Error in uploading image',
      });
    }
  };

  const deleteImage = async (id: number) => {
    // try {
    //   await axios.delete(`${AppConfig.API_URL}/media/delete/${id}`);
    // } catch (err) {
    //   notification.error({
    //     message: "Error in deleting image",
    //   });
    // }
  };

  const uploadButton = (
    <div className={s.uploadImage}>
      <UploadOutlined className={s.icon} /> {label}
      {type === 'large' && <span className={s.browseFile}>Browse files</span>}
    </div>
  );

  return (
    <div className={`${s.uploadPictureItem} ${className} ${s[type]}`}>
      <Upload
        className={`ant-file-upload-default upload-list-inline customUpload ${
          type === 'large' ? 'large' : ''
        }`}
        // action={`${qsConfig.endPoint}/media/upload`}
        // accept="image/png, image/jpeg"
        customRequest={uploadImage}
        // listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        showUploadList={{
          showPreviewIcon: false,
        }}
      >
        {uploadedFiles.length >= maxUploadAllowed ? null : uploadButton}
      </Upload>
      {uploadedFiles.length === 0 && (
        <span className={s.placeholderLabel}>{placeholder}</span>
      )}
    </div>
  );
};

export default UploadFile;
