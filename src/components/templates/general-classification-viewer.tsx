import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },
  tableCell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 8,
    textAlign: 'center',
  },
  lastTableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
});

interface DataRow {
  class: string;
  rg: string;
  name: string;
  average: string;
  concept: string;
  dob: string;
  polo: string;
  status: string;
}

interface GeneralClassificationViewerProps {
  data: DataRow[];
}

const GeneralClassificationViewer: React.FC<GeneralClassificationViewerProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Classificação Geral: CAS - 2023</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>CLASS</Text>
            <Text style={styles.tableCell}>RG</Text>
            <Text style={styles.tableCell}>NOME COMPLETO</Text>
            <Text style={styles.tableCell}>MÉDIA FINAL</Text>
            <Text style={styles.tableCell}>CONCEITO</Text>
            <Text style={styles.tableCell}>DATA DE NASCIMENTO</Text>
            <Text style={styles.tableCell}>POLO</Text>
            <Text style={styles.lastTableCell}>STATUS</Text>
          </View>
          {data.map((row, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{row.class}</Text>
              <Text style={styles.tableCell}>{row.rg}</Text>
              <Text style={styles.tableCell}>{row.name}</Text>
              <Text style={styles.tableCell}>{row.average}</Text>
              <Text style={styles.tableCell}>{row.concept}</Text>
              <Text style={styles.tableCell}>{row.dob}</Text>
              <Text style={styles.tableCell}>{row.polo}</Text>
              <Text style={styles.lastTableCell}>{row.status}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default GeneralClassificationViewer;