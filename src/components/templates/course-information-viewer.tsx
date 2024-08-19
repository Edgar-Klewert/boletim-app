import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 1.5,
    },
});

interface CourseInformationViewerProps {  
    title: string;
}

const CourseInformationViewer = ({ title }: CourseInformationViewerProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque
                    aliquam metus, sed rhoncus tellus malesuada ac. Phasellus mattis justo vel
                    libero semper ultricies. Integer fermentum, velit in luctus vehicula, odio
                    odio interdum nisl, non ultricies lectus turpis eu nunc.
                </Text>
            </View>
        </Page>
    </Document>
);

export default CourseInformationViewer;
