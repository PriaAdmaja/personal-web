import { motion } from "framer-motion";

function WideWhenVisible({ children }: {children: JSX.Element}) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0.7 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default WideWhenVisible