import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ExpenseItem({ expense, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.info}>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.category}>{expense.category}</Text>
        <Text style={styles.date}>{expense.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{expense.amount.toFixed(2)} €</Text>
        <TouchableOpacity onPress={() => onDelete(expense.id)} style={styles.deleteButton}>
          <FontAwesome5 name="trash" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  category: {
    color: '#6B7280',
    marginTop: 2,
  },
  date: {
    color: '#9CA3AF',
    marginTop: 2,
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#10B981',
  },
  deleteButton: {
    marginTop: 6,
  },
});
