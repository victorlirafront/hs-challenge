import Aside from '@/components/Aside/Aside';
import Card from '@/components/Card/Card';
import GenderFilter from '@/components/GenderFilter/GenderFilter';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import { SWAPI } from '@/constants/endpoints';
import { RootState, wrapper } from '@/redux/store';
import { fetchDataSuccess } from '@/redux/swapiSlice';
import { useSelector } from 'react-redux';
import Footer from '@/components/Footer/Footer';
import axios from 'axios';
import useFetchData from '@/hooks/useFetchData';
import { Data, Film, Person, Planet } from '@/types/swapi';
import { LoadingSpinner } from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { getCategoryTextColor } from '@/helper/getCategoryTextColor/getCategoryTextColor';
import { createDisplayObject } from '@/helper/createDisplayObject/createDisplayObject';

export default function Home() {
  useSelector((state: RootState) => state.swapi);
  const category = useSelector((state: RootState) => state.swapi.category);
  const { data, loading: fetchLoading, error: fetchError } = useFetchData<Data>(category);
  const categoryTextColor = getCategoryTextColor(category);

  return (
    <>
      <Head>
        <title>Hunter Stack Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Aside />
        <div style={{ flex: 1 }}>
          <Header />
          <GenderFilter />
          {fetchLoading && <LoadingSpinner />}
          {fetchError && <p style={{ color: 'red' }}>Error: {fetchError.message}</p>}
          <div className="cards-container">
            <div className="cards-wrapper">
              {!fetchLoading &&
                data?.results.map((item: Person | Planet | Film, index) => {
                  const currentObject = createDisplayObject(category, item);

                  return (
                    <Card
                      key={index}
                      category={category}
                      textColor={categoryTextColor}
                      info_1={currentObject.info_1}
                      info_2={currentObject.info_2}
                      info_3={currentObject.info_3}
                    />
                  );
                })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    const response = await axios.get(`${SWAPI}/people`);
    const data = response.data;

    store.dispatch(fetchDataSuccess(data));

    return { props: {} };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: {} };
  }
});
