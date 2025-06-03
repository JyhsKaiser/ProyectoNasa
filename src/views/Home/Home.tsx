import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { format, subDays } from "date-fns";

import Header from "../../components/Header/Header";
import fetchAPI from "../../utils/fetch";
import TodayImage from "../../components/TodayImage";
import Last5DaysImages from "../../components/Last5DaysImages/Last5DaysImages";
import { PostImage } from "../../types";

export default function Home() {

    const [todayImage, setImagenHoy] = useState<PostImage>({});
    const [last5DaysImages, setLast5DaysImages] = useState<PostImage[]>([]);

    useEffect(() => {
        const cargarImagenHoy = async () => {
            try {
                const imagenHoyRespuesta = await fetchAPI();
                setImagenHoy(imagenHoyRespuesta);
            } catch (error) {
                console.error("Error al cargar la imagen del día:", error);
                setImagenHoy({});
            }
        };


        const loadLast5Days = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, "yyyy-MM-dd");
                const fiveDaysAgo = format(subDays(date, 5), "yyyy-MM-dd");

                const last5DaysImagesResponse = await fetchAPI(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`);

                setLast5DaysImages(last5DaysImagesResponse);
            } catch (error) {
                console.error("Error al cargar las imágenes de los últimos 5 días:", error);
            }
        }
        loadLast5Days().catch(null);
        cargarImagenHoy().catch(null);
    }, []);


    return (
        <View style={styles.container}>
            <Header />
            <TodayImage {...todayImage} />
            <Last5DaysImages postImages={last5DaysImages} />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 16,
        // paddingTop: 40,
        backgroundColor: 'rgba(7, 26, 93, 255)',
    }
}
// export default Home;
