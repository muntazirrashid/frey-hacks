import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import QRCode from "react-qr-code";

export default function ServerModal(props: any) {
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        position: "absolute",
        height: 600,
        flexGrow: 1,
        minWidth: 600,
        transform: "translateZ(50%)",
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        "@media all and (-ms-high-contrast: none)": {
          display: "none",
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: "relative",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <QRCode value={props.value} />
        </Box>
      </Modal>
    </Box>
  );
}
