import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/system/Box";

export default function PageContainer({ children }: React.PropsWithChildren) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderWidth: 3,
        borderColor: theme.palette.primary.main,
        borderStyle: "solid",
        boxShadow: "0 0 5px #000",
        margin: "20px",
        minHeight: "80vh",
        overflowY: "none",
      }}
    >
      <Stack gap={1}>{children}</Stack>
    </Box>
  );
}
