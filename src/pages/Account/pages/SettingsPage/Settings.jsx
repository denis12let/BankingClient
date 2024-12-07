import React, { useEffect, useState } from 'react';
import styles from './Settings.module.css';
import Loader from 'ui/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentProfileThunk, fetchCurrentUserThunk, updateProfileThunk, updateUserThunk } from 'store/actions';
import SettingsTab from './SettingsTab/SettingsTab';
import Modal from 'ui/Modal/Modal';

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { profile, isLoading } = useSelector((state) => state.profile);
  const [error, setError] = useState();

  const saveHandler = async (userName, userSurname, profileImg, password) => {
    try {
      if (password) {
        await dispatch(updateUserThunk({ password })).unwrap();
      }
      await dispatch(updateProfileThunk({ userName, userSurname, profileImg })).unwrap();
      setError('');
      setIsModalOpen(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
    dispatch(fetchCurrentProfileThunk());
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Настройки аккаунта</h2>
      {isLoading || !user || !profile ? <Loader /> : <SettingsTab profile={profile} saveHandler={saveHandler} error={error} />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default Settings;
