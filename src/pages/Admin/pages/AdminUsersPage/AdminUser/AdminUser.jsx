import React, { useEffect } from 'react';
import styles from './AdminUser.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  approveBasketServiceThunk,
  deleteNewsThunk,
  fetchAllNewsThunk,
  fetchBasketServicesByUserIdThunk,
  fetchUserByIdThunk,
} from 'store/actions';
import { formatDate } from 'utils/convertUtils';
import Loader from 'ui/Loader/Loader';
import { remove } from 'store/reducers/bankReducers/newsSlice';
import Card from 'components/Card/Card';
import Service from 'pages/Account/pages/ServicesPage/ServiceList/Service/Service';
import AdminUserService from './AdminUserService/AdminUserService';

const AdminUser = ({ user }) => {
  const dispatch = useDispatch();
  const { usersBaskets, isLoading } = useSelector((state) => state.basket);

  const userBasket = usersBaskets[user.id];

  useEffect(() => {
    dispatch(fetchBasketServicesByUserIdThunk(user.id));
  }, []);

  useEffect(() => {
    console.log(user.id, 'Корзины:', usersBaskets);
  }, [usersBaskets]);

  const approve = (type, id) => {
    console.log({ userId: user.id, id, type });
    dispatch(approveBasketServiceThunk({ userId: user.id, serviceId: id, isApproved: type }));
  };

  return (
    <Card>
      <div className={styles.user}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.top}>
              <div className={styles.source}>ID: {user.id}</div>
            </div>
            <div className={styles.role}>
              <span>Роль: </span>
              <span className={styles.roleClass}>{user.role}</span>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.email}>
              <span>Email: </span>
              {user.email}
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.created}>
              <span>Дата регистрации: </span>
              {formatDate(user.createdAt).slice(0, 10)}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.services}>
            <div className={styles.servicesTitle}>Услуги пользователя</div>
            <div>{console.log(userBasket)}</div>

            {userBasket && userBasket.length > 0 && (
              <div className={styles.servicesList}>
                <>
                  {userBasket.map((service) => (
                    <AdminUserService key={service.id} serviceData={service} approve={approve} isLoading={false} />
                  ))}
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminUser;
