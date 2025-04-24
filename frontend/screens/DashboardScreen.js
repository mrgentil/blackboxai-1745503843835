import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/expenses/dashboard/summary';

export default function DashboardScreen() {
  const [total, setTotal] = useState(0);
  const [byCategory, setByCategory] = useState([]);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await axios.get(API_URL);
      setTotal(response.data.total);
      setByCategory(response.data.byCategory);
    } catch (error) {
      console.error('Erreur lors du chargement du tableau de bord', error);
    }
  };

  const chartData = byCategory.map((item, index) => ({
    name: item.category,
    population: item.total,
    color: chartColors[index % chartColors.length],
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tableau de bord des dépenses</Text>
      <Text style={styles.total}>Total des dépenses: {total.toFixed(2)} €</Text>
      {chartData.length > 0 ? (
        <PieChart
          data={chartData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      ) : (
        <Text style={styles.noData}>Aucune donnée à afficher</Text>
      )}
    </ScrollView>
  );
}

const chartColors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6'];

const chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  color: (opacity = 1) => `rgba(79, 70, 229, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  useShadowColorFromDataset: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111827',
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
    color: '#374151',
  },
  noData: {
    textAlign: 'center',
    marginTop: 50,
    color: 'gray',
  },
});
